export const generateEmailTemplate = (
  name: string,
  message: string,
  service?: string,
  company?: string,
  phone?: string,
  email?: string,
  projectType?: string,
  projectDescription?: string,
  budget?: string,
  timeline?: string,
  projectStage?: string,
  technologies?: string,
  teamSize?: string,
  additionalNotes?: string
) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Project Inquiry - Solvix Core</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333333;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background-color: #f5f5f5;
            padding: 20px 0;
          }
          .container {
            max-width: 700px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            padding: 30px 40px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            text-align: center;
            border-bottom: 3px solid #00bcd4;
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .logo-sub {
            font-size: 12px;
            color: #00bcd4;
            letter-spacing: 3px;
            margin-top: 5px;
          }
          .content {
            padding: 40px;
          }
          .greeting {
            font-size: 20px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          .intro-text {
            font-size: 14px;
            color: #666666;
            margin-bottom: 25px;
            line-height: 1.8;
          }
          .section {
            margin: 25px 0;
            background-color: #f9fafb;
            border-left: 4px solid #00bcd4;
            padding: 20px;
            border-radius: 4px;
          }
          .section-title {
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #1e293b;
            font-weight: 700;
            margin-bottom: 15px;
          }
          .info-row {
            display: flex;
            margin-bottom: 10px;
            font-size: 13px;
          }
          .info-row:last-child {
            margin-bottom: 0;
          }
          .label {
            font-weight: 600;
            color: #666666;
            width: 140px;
            flex-shrink: 0;
          }
          .value {
            color: #1e293b;
            flex: 1;
            word-break: break-word;
          }
          .highlight {
            background-color: #fff9e6;
            padding: 2px 4px;
            border-radius: 2px;
            font-weight: 600;
            color: #d97706;
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 20px 0;
          }
          .footer {
            padding: 30px 40px;
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            text-align: center;
          }
          .footer-text {
            font-size: 12px;
            color: #999999;
            margin-bottom: 8px;
            line-height: 1.6;
          }
          .contact-info {
            font-size: 12px;
            color: #666666;
            margin-top: 15px;
            padding-top: 15px;
            border-top: 1px solid #e5e7eb;
          }
          .priority-badge {
            display: inline-block;
            background-color: #ff6b6b;
            color: white;
            padding: 4px 12px;
            border-radius: 20px;
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            margin-bottom: 10px;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1 class="logo">SOLVIX CORE</h1>
              <div class="logo-sub">Project Management System</div>
            </div>
            
            <div class="content">
              <div class="priority-badge">New Project Inquiry</div>
              <h2 class="greeting">New Project Submission Received</h2>
              <p class="intro-text">
                You have received a high-priority project inquiry. Review the details below to assess if this aligns with your services and capacity.
              </p>

              <!-- Client Information Section -->
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="info-row">
                  <span class="label">Name:</span>
                  <span class="value"><strong>${name}</strong></span>
                </div>
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span class="value">${email || 'Not provided'}</span>
                </div>
                ${phone ? `<div class="info-row">
                  <span class="label">Phone:</span>
                  <span class="value">${phone}</span>
                </div>` : ''}
                ${company ? `<div class="info-row">
                  <span class="label">Company:</span>
                  <span class="value">${company}</span>
                </div>` : ''}
              </div>

              <!-- Project Details Section -->
              <div class="section">
                <div class="section-title">Project Details</div>
                <div class="info-row">
                  <span class="label">Service:</span>
                  <span class="value">${service || 'Not specified'}</span>
                </div>
                ${projectType ? `<div class="info-row">
                  <span class="label">Project Type:</span>
                  <span class="value"><strong>${projectType}</strong></span>
                </div>` : ''}
              </div>

              <!-- Project Scope Section -->
              <div class="section">
                <div class="section-title">Project Scope</div>
                ${budget ? `<div class="info-row">
                  <span class="label">Budget:</span>
                  <span class="value"><span class="highlight">${budget}</span></span>
                </div>` : ''}
                ${timeline ? `<div class="info-row">
                  <span class="label">Timeline:</span>
                  <span class="value"><strong>${timeline}</strong></span>
                </div>` : ''}
                ${projectStage ? `<div class="info-row">
                  <span class="label">Project Stage:</span>
                  <span class="value">${projectStage}</span>
                </div>` : ''}
              </div>

              <!-- Project Description Section -->
              ${projectDescription ? `<div class="section">
                <div class="section-title">Project Description</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${projectDescription}
                </div>
              </div>` : ''}

              <!-- Technical Requirements Section -->
              ${(technologies || teamSize) ? `<div class="section">
                <div class="section-title">Technical Requirements</div>
                ${technologies ? `<div class="info-row">
                  <span class="label">Technologies:</span>
                  <span class="value">${technologies}</span>
                </div>` : ''}
                ${teamSize ? `<div class="info-row">
                  <span class="label">Team Size:</span>
                  <span class="value">${teamSize}</span>
                </div>` : ''}
              </div>` : ''}

              <!-- Additional Notes Section -->
              ${additionalNotes ? `<div class="section">
                <div class="section-title">Additional Notes</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${additionalNotes}
                </div>
              </div>` : ''}

              <!-- Client Message Section -->
              <div class="section">
                <div class="section-title">Message from Client</div>
                <div style="font-size: 13px; color: #333333; line-height: 1.8; white-space: pre-wrap; word-wrap: break-word;">
                  ${message}
                </div>
              </div>

              <div class="divider"></div>

              <!-- Action Items -->
              <div style="background-color: #e7f3ff; border: 1px solid #b3d9ff; border-radius: 4px; padding: 15px; margin: 20px 0; font-size: 13px; color: #0466c2;">
                <strong>Next Steps:</strong><br>
                1. Review project requirements and budget<br>
                2. Assess team capacity and timeline<br>
                3. Contact client within 24 hours<br>
                4. Send preliminary proposal
              </div>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core Project Inquiry Management</strong>
              </div>
              <div class="footer-text">
                This is an automated high-priority notification. Do not reply to this email.
              </div>
              <div class="contact-info">
                <strong>You can reply directly to:</strong> ${email}<br>
                <strong>Or call:</strong> ${phone || 'Not provided'}<br>
                <strong>Recommended response time:</strong> Within 24 hours<br>
                &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

export const generateUserConfirmationTemplate = (name: string) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You - Solvix Core</title>
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            background-color: #f5f5f5;
            color: #333333;
            line-height: 1.6;
          }
          .wrapper {
            width: 100%;
            background-color: #f5f5f5;
            padding: 20px 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          }
          .header {
            padding: 40px 30px;
            background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
            text-align: center;
            border-bottom: 3px solid #10b981;
          }
          .logo {
            font-size: 28px;
            font-weight: 800;
            letter-spacing: 2px;
            color: #ffffff;
            margin: 0;
            text-transform: uppercase;
          }
          .logo-sub {
            font-size: 12px;
            color: #10b981;
            letter-spacing: 3px;
            margin-top: 5px;
          }
          .content {
            padding: 40px;
            text-align: center;
          }
          .greeting {
            font-size: 24px;
            font-weight: 700;
            color: #1e293b;
            margin-bottom: 15px;
          }
          .checkmark {
            font-size: 48px;
            margin-bottom: 20px;
            display: block;
          }
          .message-box {
            background-color: #f0fdf4;
            border: 1px solid #86efac;
            border-radius: 8px;
            padding: 20px;
            margin: 25px 0;
            line-height: 1.8;
          }
          .message-box p {
            font-size: 14px;
            color: #333333;
            margin-bottom: 10px;
          }
          .message-box p:last-child {
            margin-bottom: 0;
          }
          .highlight {
            color: #10b981;
            font-weight: 600;
          }
          .timeline {
            margin: 30px 0;
            padding: 20px;
            background-color: #f9fafb;
            border-radius: 8px;
          }
          .timeline-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #e5e7eb;
            text-align: left;
          }
          .timeline-item:last-child {
            margin-bottom: 0;
            padding-bottom: 0;
            border-bottom: none;
          }
          .timeline-time {
            font-size: 12px;
            font-weight: 600;
            color: #10b981;
            text-transform: uppercase;
            margin-bottom: 3px;
          }
          .timeline-text {
            font-size: 13px;
            color: #666666;
          }
          .cta-link {
            display: inline-block;
            margin-top: 20px;
            padding: 12px 28px;
            background: linear-gradient(135deg, #10b981 0%, #059669 100%);
            color: #ffffff;
            text-decoration: none;
            font-weight: 600;
            border-radius: 4px;
            font-size: 14px;
            transition: all 0.3s ease;
          }
          .cta-link:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(16, 185, 129, 0.3);
          }
          .divider {
            height: 1px;
            background-color: #e5e7eb;
            margin: 20px 0;
          }
          .footer {
            padding: 30px 40px;
            background-color: #f9fafb;
            border-top: 1px solid #e5e7eb;
            text-align: center;
          }
          .footer-text {
            font-size: 12px;
            color: #999999;
            margin-bottom: 8px;
            line-height: 1.6;
          }
          .social-links {
            margin: 15px 0;
          }
          .social-links a {
            display: inline-block;
            margin: 0 8px;
            color: #00bcd4;
            text-decoration: none;
            font-size: 12px;
            font-weight: 600;
          }
        </style>
      </head>
      <body>
        <div class="wrapper">
          <div class="container">
            <div class="header">
              <h1 class="logo">SOLVIX CORE</h1>
              <div class="logo-sub">Thank You for Contacting Us</div>
            </div>

            <div class="content">
              <span class="checkmark">✅</span>
              <h2 class="greeting">Thank You, ${name}!</h2>
              
              <div class="message-box">
                <p>We've successfully received your message and appreciate you reaching out to Solvix Core.</p>
                <p>Our team is committed to reviewing your inquiry carefully and will get back to you with a thoughtful response <span class="highlight">within 24 business hours</span>.</p>
              </div>

              <div class="divider"></div>

              <div class="timeline">
                <div class="timeline-item">
                  <div class="timeline-time">✓ Step 1: Message Received</div>
                  <div class="timeline-text">Your inquiry has been logged in our system and assigned to the appropriate specialist.</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-time">⏳ Step 2: Under Review</div>
                  <div class="timeline-text">Our team is analyzing your request and gathering relevant information to provide you with the best solution.</div>
                </div>
                <div class="timeline-item">
                  <div class="timeline-time">📧 Step 3: Direct Response</div>
                  <div class="timeline-text">You will receive a personalized email response with detailed information and next steps.</div>
                </div>
              </div>

              <div class="divider"></div>

              <p style="font-size: 14px; color: #666666; margin-bottom: 15px;"><strong>In the meantime, feel free to:</strong></p>
              <a href="https://solvixcore.com" class="cta-link">Visit Our Website</a>
              
              <p style="font-size: 12px; color: #999999; margin-top: 20px; line-height: 1.8;">
                Have questions? You can reply directly to this email or visit our <br>
                <a href="https://solvixcore.com/contact" style="color: #00bcd4; text-decoration: none;">contact page</a> for additional support options.
              </p>
            </div>

            <div class="footer">
              <div class="footer-text">
                <strong>Solvix Core</strong><br>
                Premium Tech Solutions & Business Innovation
              </div>
              <div class="social-links">
                <a href="#">LinkedIn</a> | 
                <a href="#">Twitter</a> | 
                <a href="#">Website</a>
              </div>
              <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e5e7eb;">
                <div class="footer-text">
                  📍 Ottawa, ON, Canada<br>
                  📧 info@solvixcore.com<br>
                  🕐 Monday - Friday, 9 AM - 6 PM EST<br>
                  &copy; ${new Date().getFullYear()} Solvix Core. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};
