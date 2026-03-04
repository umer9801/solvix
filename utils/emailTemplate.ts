export const generateEmailTemplate = (name: string, message: string, service?: string, company?: string, phone?: string) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Inquiry - Solvix Core</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #050505;
            color: #ffffff;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: linear-gradient(145deg, #0a0a0a, #050505);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }
          .header {
            padding: 40px 20px;
            text-align: center;
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -1px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .logo span {
            color: #7c3aed; /* Primary purple-ish accent if any, or just white */
          }
          .content {
            padding: 40px 30px;
          }
          .greeting {
            font-size: 22px;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(to right, #ffffff, #a1a1aa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .info-grid {
            margin: 30px 0;
            padding: 20px;
            background: rgba(255, 255, 255, 0.03);
            border-radius: 12px;
            border: 1px solid rgba(255, 255, 255, 0.05);
          }
          .info-item {
            margin-bottom: 15px;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            padding-bottom: 10px;
          }
          .info-item:last-child {
            margin-bottom: 0;
            border-bottom: none;
            padding-bottom: 0;
          }
          .label {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #a1a1aa;
            display: block;
            margin-bottom: 4px;
          }
          .value {
            font-size: 16px;
            font-weight: 500;
            color: #ffffff;
          }
          .message-box {
            padding: 20px;
            background: rgba(255, 255, 255, 0.02);
            border-left: 4px solid #ffffff;
            border-radius: 4px;
            margin-top: 20px;
          }
          .footer {
            padding: 30px;
            text-align: center;
            font-size: 13px;
            color: #71717a;
            background: rgba(255, 255, 255, 0.01);
          }
          .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: #ffffff;
            color: #000000;
            text-decoration: none;
            font-weight: 700;
            border-radius: 8px;
            margin-top: 30px;
            transition: transform 0.2s ease;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">SOLVIX<span>CORE</span></h1>
          </div>
          <div class="content">
            <h2 class="greeting">New Message Received</h2>
            <p>You have a new inquiry from your website contact form. Here are the details:</p>
            
            <div class="info-grid">
              <div class="info-item">
                <span class="label">Name</span>
                <span class="value">${name}</span>
              </div>
              ${service ? `
              <div class="info-item">
                <span class="label">Service</span>
                <span class="value">${service}</span>
              </div>` : ''}
              ${company ? `
              <div class="info-item">
                <span class="label">Company</span>
                <span class="value">${company}</span>
              </div>` : ''}
              ${phone ? `
              <div class="info-item">
                <span class="label">Phone</span>
                <span class="value">${phone}</span>
              </div>` : ''}
            </div>

            <div class="label">Message</div>
            <div class="message-box">
              ${message.replace(/\n/g, '<br>')}
            </div>

            <a href="mailto:info@solvixcore.com" class="btn">Reply via Email</a>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.<br>
            Ottawa, ON, Canada | info@solvixcore.com
          </div>
        </div>
      </body>
    </html>
  `;
};

export const generateUserConfirmationTemplate = (name: string) => {
    return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Solvix Core</title>
        <style>
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background-color: #050505;
            color: #ffffff;
            margin: 0;
            padding: 0;
            line-height: 1.6;
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background: linear-gradient(145deg, #0a0a0a, #050505);
            border: 1px solid rgba(255, 255, 255, 0.05);
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
          }
          .header {
            padding: 40px 20px;
            text-align: center;
            background: rgba(255, 255, 255, 0.02);
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: -1px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .content {
            padding: 40px 30px;
            text-align: center;
          }
          .greeting {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 20px;
            background: linear-gradient(to right, #ffffff, #a1a1aa);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          }
          .footer {
            padding: 30px;
            text-align: center;
            font-size: 13px;
            color: #71717a;
            background: rgba(255, 255, 255, 0.01);
          }
          .btn {
            display: inline-block;
            padding: 12px 24px;
            background-color: #ffffff;
            color: #000000;
            text-decoration: none;
            font-weight: 700;
            border-radius: 8px;
            margin-top: 30px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1 class="logo">SOLVIXCORE</h1>
          </div>
          <div class="content">
            <h2 class="greeting">Hi ${name},</h2>
            <p>Thank you for reaching out to Solvix Core! We've received your message and our team will get back to you within 24 hours.</p>
            <p>In the meantime, feel free to check out our latest projects and services on our website.</p>
            <a href="https://solvixcore.com" class="btn">Visit Website</a>
          </div>
          <div class="footer">
            &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.<br>
            Transforming businesses with premium tech solutions.
          </div>
        </div>
      </body>
    </html>
  `;
};
