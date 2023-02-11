import React from 'react';
import './Terms.css'
const TermsOfService = () => {
  return (
    <header style={HeaderStyle}>
    <div className="Terms-of-Service">

      <h1>Terms of Service</h1>
      <p>
        These Terms of Service ("Terms") govern your access to and use of our website, services, and products (collectively, "Services"). Please read these Terms carefully, and contact us if you have any questions. By accessing or using our Services, you agree to be bound by these Terms and our Privacy Policy.
      </p>
      <h2>Use of our Services</h2>
      <p>
        You may use our Services only for lawful purposes and in accordance with these Terms. You agree not to use our Services:
      </p>
      <ul>
        <li>In any way that violates any applicable federal, state, local, or international law or regulation</li>
        <li>For the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise</li>
        <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation</li>
        <li>To impersonate or attempt to impersonate another person or entity</li>
      </ul>
      <p>
        We reserve the right to discontinue any aspect of our Services at any time.
      </p>
      <h2>Intellectual Property</h2>
      <p>
        The content on our Services, including but not limited to text, photographs, graphics, and logos, is protected by intellectual property rights. You may not use any content from our Services without our prior written permission.
      </p>
      <h2>Modifications to these Terms</h2>
      <p>
        We may modify these Terms from time to time. If we make material changes to these Terms, we will notify you by posting the revised Terms on our website or through other communications. Your continued use of our Services after any such changes constitutes your acceptance of the new Terms.
      </p>
      <h2>Disclaimers</h2>
      <p>
        Our Services are provided "as is." We make no warranties, express or implied, and hereby disclaim and negate all other warranties, including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      </p>
      <p>
        Further, we do not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on our Services or otherwise relating to such materials or on any sites linked to our Services.
      </p>
      <h2>Limitation of Liability</h2>
      <p>
        In no event shall we be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use our Services, even if we have been notified orally or in writing of the possibility of such damage.
      </p>
      <h2>Governing Law</h2>
      <p>
        These Terms shall be governed and construed in accordance with the laws of the state
        </p>
        </div>
        </header>
  )
}
const HeaderStyle = {
  width: "100%",
  height: "100vh",
  //  background: `url(${BackgroundImage})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  // backgroundColor: "#E1D9D1"


}
export default TermsOfService;
