import React, { useEffect, useState } from 'react';

const RazorpayComponent = () => {
  const [rzp, setRzp] = useState(null);

  useEffect(() => {
    const loadRazorpayScript = () => {
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => {
        const options = {
          key: 'rzp_test_9u3kMcqchK88zT',
          amount: 1000000, // Amount in paise (100 paise = 1 Rupee)
          currency: 'INR',
          name: 'My Dummy Store',
          description: 'Test Transaction',
          handler: function (response) {
            alert('Payment Successful! Payment ID: ' + response.razorpay_payment_id);
          },
          prefill: {
            name: 'John Doe',
            email: 'john@example.com',
            contact: '9999999999',
          },
          notes: {
            address: 'Dummy Store Address',
          },
          theme: {
            color: '#3399cc',
          },
          modal: {
            ondismiss: function () {
              // Close QR code display if the modal is dismissed
              setQrCodeUrl('');
            }
          }
        };

        const rzpInstance = new window.Razorpay(options);
        setRzp(rzpInstance);

        // Handle UPI payment QR code display
        window.RazorpayUPIHandler = function (paymentOptions) {
          const qrCode = document.createElement('img');
          qrCode.src = paymentOptions.qr_url;
          qrCode.alt = 'UPI QR Code';
          qrCode.style.width = '100%';
          qrCode.style.height = 'auto';

          const qrCodeWindow = window.open('', '_blank', 'width=400,height=400');
          qrCodeWindow.document.write('<html><head><title>UPI QR Code</title></head><body></body></html>');
          qrCodeWindow.document.body.appendChild(qrCode);
        };
      };
      document.body.appendChild(script);
    };

    loadRazorpayScript();
  }, []);

  const handleClick = () => {
    if (rzp) {
      // Open Razorpay checkout
      rzp.open();
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <h2>Hall Advance</h2>
        <p>
          This amount is paid as advance to book your slot for the desired date and time. By not paying this amount, your booking will not be finalized. 
          <span style={{ color: 'red' }}>
            Failure to make this payment will result in the cancellation of your booking and you may lose your slot.
          </span>
        </p>
        <p>
          Please ensure that the payment is made promptly to secure your booking. 
          <span style={{ color: 'green' }}>
            Once the payment is received, you will receive a confirmation email with your booking details.
          </span>
        </p>
        <p><strong>Important Warnings:</strong></p>
        <ul>
          <li><span style={{ color: 'red' }}>Do not share your payment details with anyone. Be cautious of phishing scams and fraudulent websites.</span></li>
          <li><span style={{ color: 'red' }}>If you encounter any issues during the payment process, contact our support team immediately.</span></li>
          <li><span style={{ color: 'green' }}>Ensure that you keep a record of your transaction for future reference.</span></li>
          <li><span style={{ color: 'green' }}>Check your email for a receipt and confirmation once the payment is successful.</span></li>
        </ul>
        <p>
          For detailed instructions on how to perform the payment online, please refer to our guide: 
          <a href="https://razorpay.com/docs/#home-payments" target="_blank" rel="noopener noreferrer">
            How to Perform Payment Online
          </a>.
        </p>
        <p>Price: ₹5000</p>
        <button onClick={handleClick}>Pay Now</button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    padding: '0 20px', // Add spacing on left and right
  },
  content: {
    maxWidth: '600px', // Limit content width for better readability
    width: '100%',
    textAlign: 'center',
  },
};

export default RazorpayComponent;