# EmailJS Setup Guide for Contact Form

This guide will help you set up EmailJS to enable email functionality on your contact form, allowing visitors to send emails directly to `themorningsisterbreakfast@gmail.com`.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from JavaScript without requiring a backend server. It's perfect for static websites like yours.

## Step-by-Step Setup

### 1. Create an EmailJS Account
(achiha_anh@yahoo.com.vn)
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Set Up Email Service

1. **Add Email Service:**
   - In your EmailJS dashboard, go to "Email Services"
   - Click "Add New Service"
   - Choose "Gmail" (since you're using a Gmail address)
   - Connect your Gmail account
   - Create app password for Gmail
   - Give it a name (e.g., "Gmail Service"), Email address and App Password
   - Note down the **Service ID** (you'll need this later)

2. **Create Email Template:**
   - Go to "Email Templates"
   - Click "Create New Template"
   - Use this template content:

```html
<h2>Subject: New Contact Form Message from {{from_name}}</h2>

<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            Name: <strong>{{name}}</strong>
          </div>
          <div style="color: #2c3e50; font-size: 16px">
            Subject: {{subject}}
          </div>
          <div style="color: #2c3e50; font-size: 16px">
            Phone: {{from_phone}}
          </div>
          <div style="color: #cccccc; font-size: 13px">
            Email: {{from_email}}
          </div>
          <p style="font-size: 16px">{{message}}</p>
        </td>
      </tr>
    </table>
  </div>
</div>
```

   - Save the template and note down the **Template ID**

### 3. Get Your Public Key

1. Go to "Account" → "API Keys"
2. Copy your **Public Key**

### 4. Update Your Code

1. **Update `js/contact.js`:**
   - Replace `"YOUR_PUBLIC_KEY"` with your actual public key
   - Replace `"YOUR_SERVICE_ID"` with your service ID
   - Replace `"YOUR_TEMPLATE_ID"` with your template ID

Example:
```javascript
emailjs.init("user_abc123def456"); // Your public key

emailjs.send("service_xyz789", "template_abc123", {
    // ... rest of the code
});
```

### 5. Test Your Setup

1. Fill out the contact form on your website
2. Click "Send Message"
3. Check your Gmail inbox at `themorningsisterbreakfast@gmail.com`
4. You should receive the email with the form details

## Free Plan Limitations

- **200 emails per month** (usually sufficient for small businesses)
- **2 email templates**
- **1 email service**

## Troubleshooting

### Common Issues:

1. **"EmailJS is not defined" error:**
   - Make sure the EmailJS CDN script is loaded in your HTML
   - Check that the script tag is placed before your contact.js file

2. **"Service not found" error:**
   - Verify your Service ID is correct
   - Make sure your email service is properly connected

3. **"Template not found" error:**
   - Verify your Template ID is correct
   - Make sure your email template is saved and active

4. **Emails not being received:**
   - Check your Gmail spam folder
   - Verify your Gmail account is properly connected in EmailJS
   - Check the EmailJS dashboard for any error messages

### Testing in Development:

- EmailJS works in both development and production
- You can test locally without deploying to a server
- Check the browser console for any error messages

## Security Notes

- Your public key is safe to expose in frontend code
- EmailJS handles the security of your email credentials
- Never expose your private keys or service credentials

## Support

If you encounter issues:
1. Check the [EmailJS documentation](https://www.emailjs.com/docs/)
2. Visit the [EmailJS community forum](https://community.emailjs.com/)
3. Contact EmailJS support for account-specific issues

## Cost

- **Free plan:** 200 emails/month (usually sufficient for small businesses)
- **Paid plans:** Start at $15/month for 1,000 emails
- **Enterprise:** Custom pricing for high-volume needs

---

**Note:** This setup will allow anyone who visits your website to send emails to `themorningsisterbreakfast@gmail.com` through your contact form. Make sure this is the intended behavior for your business.
