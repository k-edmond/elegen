import { NextRequest, NextResponse } from 'next/server';
import { FetchClient, Config, HeaderUtils } from 'coze-coding-dev-sdk';

export async function POST(request: NextRequest) {
  try {
    const { url } = await request.json();
    
    if (!url) {
      return NextResponse.json({ error: 'URL is required' }, { status: 400 });
    }
    
    // Extract forward headers for proper request tracing
    const customHeaders = HeaderUtils.extractForwardHeaders(request.headers);
    
    const config = new Config();
    const client = new FetchClient(config, customHeaders);
    
    const response = await client.fetch(url);
    
    if (response.status_code !== 0) {
      return NextResponse.json({ 
        error: 'Failed to fetch document',
        status_message: response.status_message 
      }, { status: 500 });
    }
    
    // Extract text content from the document
    const textContent = response.content
      .filter(item => item.type === 'text')
      .map(item => item.text)
      .join('\n');
    
    return NextResponse.json({
      title: response.title,
      content: textContent,
      rawContent: response.content,
      url: response.url,
    });
  } catch (error) {
    console.error('Error fetching document:', error);
    return NextResponse.json({ 
      error: 'Internal server error',
      details: error instanceof Error ? error.message : 'Unknown error'
    }, { status: 500 });
  }
}
