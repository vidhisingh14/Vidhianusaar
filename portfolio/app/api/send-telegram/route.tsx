import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Get environment variables (without NEXT_PUBLIC_ prefix for server-side)
    const botToken = process.env.TELEGRAM_BOT_TOKEN
    const chatId = process.env.TELEGRAM_CHAT_ID

    if (!botToken || !chatId) {
      console.error('Missing Telegram credentials in environment variables')
      return NextResponse.json(
        { error: 'Telegram configuration missing' },
        { status: 500 }
      )
    }

    const telegramMessage = `🔔 New Contact Form Submission

👤 Name: ${name}
📧 Email: ${email}
💬 Message: ${message}

📅 Time: ${new Date().toLocaleString()}`

    const telegramUrl = `https://api.telegram.org/bot${botToken}/sendMessage`
    
    const response = await fetch(telegramUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        chat_id: chatId,
        text: telegramMessage,
        parse_mode: 'HTML'
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('Telegram API error:', errorText)
      throw new Error(`Telegram API error: ${response.status}`)
    }

    const result = await response.json()
    console.log('Telegram notification sent successfully:', result)

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Error in telegram API route:', error)
    return NextResponse.json(
      { error: 'Failed to send Telegram notification' },
      { status: 500 }
    )
  }
}