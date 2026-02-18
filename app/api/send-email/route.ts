import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json();
    console.log('Received form submission:', { name, email, messageLength: message?.length });

    // Validate required fields
    if (!name || !email || !message) {
      console.log('Validation failed: missing fields');
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Check if environment variables are set
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Email environment variables not set');
      console.log('EMAIL_USER exists:', !!process.env.EMAIL_USER);
      console.log('EMAIL_PASS exists:', !!process.env.EMAIL_PASS);
      return NextResponse.json(
        { error: 'Email service not configured. Please contact the administrator.' },
        { status: 500 }
      );
    }

    console.log('Environment variables loaded successfully');

    // Create transporter using Gmail SMTP
    console.log('Creating email transporter...');
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Verify transporter configuration
    console.log('Verifying transporter configuration...');
    try {
      await transporter.verify();
      console.log('Transporter verification successful');
    } catch (verifyError) {
      console.error('Email transporter verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Email service configuration error. Please check your email credentials.' },
        { status: 500 }
      );
    }

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'aventismarketing5@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #333; border-bottom: 2px solid #0891b2; padding-bottom: 10px;">New Contact Form Submission</h2>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0891b2; margin-bottom: 5px;">Contact Details:</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0891b2; margin-bottom: 5px;">Message:</h3>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #0891b2;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; color: #666; font-size: 12px;">
            <p>This email was sent from the Fien Water website contact form.</p>
            <p>Timestamp: ${new Date().toLocaleString()}</p>
          </div>
        </div>
      `,
      // Also include a plain text version
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
        
        Sent from Fien Water website at ${new Date().toLocaleString()}
      `
    };

    // Send email with better error handling
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Failed to send email:', emailError);
      
      // Provide more specific error messages
      if (emailError instanceof Error) {
        if (emailError.message.includes('Invalid login')) {
          return NextResponse.json(
            { error: 'Email authentication failed. Please check your email credentials.' },
            { status: 500 }
          );
        } else if (emailError.message.includes('Network')) {
          return NextResponse.json(
            { error: 'Network error. Please check your internet connection.' },
            { status: 500 }
          );
        }
      }
      
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      );
    }

  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}
