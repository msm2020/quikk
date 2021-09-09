import { Box, Link, Text } from "@chakra-ui/core";
import React from "react";
import TnPLayout from "../../Components/TnPLayout";

const Data = [
  {
    id: "intro",
    title: "Introduction",
    value:
    'We, at Quiklyy and our affiliated companies worldwide (hereinafter collectively referred to as "Quiklyy"), are committed to respecting your online privacy and recognize the need for appropriate protection and management of any personally identifiable information you share with us. This Privacy Policy ("Policy") describes how Quiklyy collects, uses, discloses and transfers personal information of users through its websites and applications, including through www.quiklyy.com, mobile applications and online services (collectively, the "Platform"). This policy applies to those who visit the Platform, or whose information Quiklyy otherwise receives in connection with its services (such as contact information of individuals associated with Quiklyy including partners) (hereinafter collectively referred to as "Users"). For the purposes of the Privacy Policy, "You" or "Your" shall mean the person who is accessing the Platform.'

  },
  {
    id: "types",
    title: "Types of Personal Information collected by Quiklyy",
    value:
    <div>
      "Personal information" (PI) - means any information relating to an identified or identifiable natural person including common identifiers such as a name, an identification number, location data, an online identifier or one or more factors specific to the physical, physiological, genetic, mental, economic, cultural or social identity of that natural person and any other information that is so categorized by applicable laws. We collect information about you and/or your usage to provide better services and offerings. The Personal Information that we collect, and how we collect it, depends upon how you interact with us. We collect the following categories of Personal Information in the following ways:
      <ul style={{margin: '35px 0 0 38px'}}> 
        <li>name, email address, password, country, city, contact number and company/organization that you are associated with, when the you sign up for alerts on the Platform; </li>
        <li> information that one would usually include in a resume, including name, contact details including e-mail address and mobile number, work experience, educational qualifications, data relating to your current, past and future remuneration or salary, a copy of your resume, etc. when you register on the Platform;</li>
        <li> information about the services that you use and how you use them, including log information and location information, when you are a user of the services through the Platform;</li>
        <li> we may collect your Personal Information such as name, age, contact details, preferences, etc. through surveys and forms, when you choose to participate in these surveys etc.;</li>
        <li> we may also collect information relating to your caste and information about whether you are eligible for any affirmative action programmes or policies, if you opt to provide such information;</li>
        <li> when you communicate with Quiklyy or use the Platform to communicate with other Users (such as partners), we collect information about your communication and any information you choose to provide;</li>
        <li> when you visit the Platform, we use cookies to automatically collect, store and use technical information about your system and interaction with our Platform; </li>
        <li> when you use a device to access the Platform, Quiklyy may collect technical or other related information from the device as well as the device location;</li>
        <li> To the extent permitted by law, Quiklyy may record and monitor your communications with us to ensure compliance with our legal and regulatory obligations and our internal policies. This may include the recording of telephone conversations;</li>
        <li> If you choose to sign in with your social media account to access the Platform, or otherwise connect your social media account with the services of the Platform, you consent to our collection, storage, and use, in accordance with this Privacy Policy, of the information that you make available to us through the social media interface. Please see your social media provider's privacy policy and help centre for more information about how they share information when you choose to connect your account.</li>
      </ul>
    </div>
  
  },
  {
    id: "info",
    title: "How Quiklyy may use your Personal Information",
    value:
    <div>
      We will only use your personal data in a fair and reasonable manner, and where we have a lawful reason to do so.
    <p > Our use of your personal data depends on the purpose for which you interact with us. We may process your Personal Information for the following purposes: </p>

    <ul style={{margin: '35px 0 0 38px'}}>
        <li>Providing our services and products to you including to send you job alerts, calendar alerts, relevant search results, recommended jobs and/or candidates (as the case maybe), and other social media communication facilities;</li>
        <li> Protecting our Users and providing you with customer support;</li>
        <li> We use information collected from cookies and other technologies, to improve your user experience and the overall quality of our services (for more information please refer to paragraph 4 below). When showing you tailored ads, we will not associate an identifier from cookies or similar technologies with sensitive categories, such as those based on race, religion, sexual orientation or health.</li>
        <li> Improving the Platform and its content to provide better features and services.</li>
        <li> Conducting market research and surveys with the aim of improving our products and services.</li>
        <li> Sending you information about our products and services for marketing purposes and promotions;</li>
        <li>Preventing, detecting, investigating and taking action against crimes (including but not limited to fraud and other financial crimes), any other illegal activities, suspected fraud, or violations of Quiklyy’s Terms of Use in any jurisdiction</li>
        <li>To the extent required for identity verification, government sanctions screening and due diligence checks.</li>
        <li>Establishing, exercising or defending legal rights in connection with legal proceedings (including any prospective legal proceedings) and seeking professional or legal advice in relation to such legal proceedings.</li>
      
      </ul>
    </div>
  },
  {
    id: "cookies",
    title: "Cookies and Other Tracking Technologies",
    value:
    <div>
    <p > Some of our web pages utilize "cookies" and other tracking technologies. A "cookie" is a small text file that may be used, for example, to collect information about web-site activity. Some cookies and other technologies may serve to recall Personal Information previously indicated by a user. Most browsers allow you to control cookies, including whether or not to accept them and how to remove them.</p>
    <p > You may set most browsers to notify you if you receive a cookie, or you may choose to block cookies with your browser, but please note that if you choose to erase or block your cookies, you will need to re-enter your original user ID and password to gain access to certain parts of the Platform.</p>
    <p >  Tracking technologies may record information such as Internet domain and host names; Internet protocol (IP) addresses; browser software and operating system types; clickstream patterns; and dates and times that our site is accessed. Our use of cookies and other tracking technologies allows us to improve our Platform and the overall website experience. We may also analyse information that does not contain Personal Information for trends and statistics.</p>
    <p > For more information about our use of cookies please refer to our Cookie Policy.</p>
    </div>
  },
  {
    id: "basis",
    title: "The Basis/ Grounds which we rely on for collection and processing of your Personal Information",
    value:
     <div>
       Your Personal Information is collected and processed by Quiklyy based on the following legal grounds depending upon the nature of Personal Information and the purposes for which it is processed.

       <ul style={{margin: '35px 0 0 38px'}}>
         <li> <span style={{fontWeight : 'bold'}}>  Consent:</span>
           <p>Quiklyy relies on your consent in order to process your Personal Information in certain situations. If Quiklyy requires your consent to collect and process certain Personal Information, as per the requirements under the applicable data protection laws, your consent is sought at the time of collection of your Personal Information and such processing will only be performed where consent is secured.</p>
           
          </li>
         <li style={{marginTop: '15px'}}> <span style={{fontWeight : 'bold'}}> Compliance with a legal obligation: </span>

            <p>Your Personal Information may be processed by Quiklyy, to the extent that such processing is necessary to allow Quiklyy to comply with a legal obligation. An example of this would be if Quiklyy is required to disclose your Personal Information to respond to a court order or if Quiklyy is required to retain specific records for a fixed period to comply with requirements under any applicable law.</p>

         </li>
         </ul>

     </div>
  },
  {
    id: "disclosure",
    title: "Information Sharing and Disclosure",
    value:
    <div>
      <p> We restrict access to your Personal Information to employees who we believe reasonably need to know/or that information to fulfil their jobs to provide, operate, develop, or improve our products or services.</p>
      <p> Quiklyy does not disclose, transfer or share your Personal Information with others except with:</p>

          <ul style={{margin: '35px 0 0 38px'}}>
            <li> Our affiliates and group companies to the extent required for our internal business and/or administrative purposes and/or general corporate operations and for provision of services;</li>
            <li>Potential recruiters if we determine that your resume matches a particular job description/ vacancy available with such recruiters. By registering on the Platform and consenting to the terms of this Privacy Policy, you agree that Quiklyy may contact you or forward your resume to potential recruiters;</li>
            <li> Third parties including enforcement, regulatory and judicial authorities, if we determine that disclosure of your Personal Information is required to a) respond to subpoenas, court orders, or legal process, or to establish or exercise our legal rights or defend against legal claims; or b) investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person, violations of Quiklyy’s Terms of Use or as otherwise required by law;</li>
            <li> In the event of a merger, acquisition, financing, or sale of assets or any other situation involving the transfer of some or all of Quiklyy’s business assets we may disclose Personal Information to those involved in the negotiation or transfer.</li>
            <li> Third party service providers and marketing partners that Quiklyy engages to a) provide services over the Platform on Quiklyy’s behalf; b) maintain the Platform and mailing lists; or c) communicate with you on Quiklyy’s behalf about offers relating to its products and/or services. Quiklyy will take reasonable steps to ensure that these third-party service providers are obligated to protect your Personal Information and are also subject to appropriate confidentiality / non-disclosure obligations.</li>
            <li> Third party advertisers to display advertisements to you when you visit the Platform. The third-party advertisers include financial service providers (such as banks, insurance agents, stock brokers and mortgage lenders) and non-financial companies (such as stores, airlines, and software companies). These companies may use information about you and your visits to this Platform and other web sites to provide advertisements on this Platform.</li>
          </ul>
    
      <p>The Company does not provide any Personal Information to the advertiser when you interact with or view a targeted advertisement. However, if you interact with or view an advertisement, the advertiser may make certain assumptions and, in the process, learn certain Personal Information about you. For instance, if you view and click an advertisement that is targeted towards women in the age group 18- 24 from a specific geographic area, the advertiser may assume that you meet the relevant criteria.</p>
      <p>Quiklyy does not intend to transfer Personal Information without your consent to third parties who are not bound to act on Quiklyy's behalf unless such transfer is legally required.</p>
      <p>If your Personal Information is transferred outside India, we take the necessary steps to protect your Personal Information in accordance with applicable data protection laws.</p>
    </div>
  },
  {
    id: "Content_3rd",
    title: "Third Party Content",
    value:
    <div>
      <p> Please be aware that the Platform sometimes contains links to other sites that are not governed by this Privacy Policy. Users may be directed to third-party sites for more information, such as advertisers, blogs, content sponsorships, vendor services, social networks, etc.</p>
      <p>Quiklyy makes no representations or warranties regarding how your information is stored or used on third-party servers. We recommend that you review the applicable privacy statements and policies of each third-party site linked from the Platform to determine their use of your personal information.</p>
    </div>
  },
  {
    id: "children",
    title: "Children",
    value:
    <div>
      <p> To use the Platform, you agree that you must be the minimum age (described in this paragraph below) or older.</p>
      <p> The minimum age for these purposes shall be eighteen (18), however if local laws require that you must be older for Quiklyy to be able to lawfully provide the services over the Platform to you then that older age shall apply as the applicable minimum age.</p>
      <p> If you are under the age of 18 or the age of majority in your jurisdiction, you must use the Platform under the supervision of your parent, legal guardian or responsible adult.</p>
    </div>

  },
  {
    id: "retentionInfo",
    title: "Retention of Personal Information",
    value:
    <div>
      <p> Your Personal Information will not be retained by Quiklyy any longer than it is necessary for the purposes for which the Personal Information is processed and/or in accordance with legal, regulatory, contractual or statutory obligations as applicable.</p>
     <p>At the expiry of such periods, your Personal Information will be deleted or archived in compliance with applicable laws</p>

    </div>
  },
  {
    id: "ControlInfo",
    title: "Controlling your personal information",
    value:
    <div>
      <p>You have the right to invoke your rights which are available to data principals or data subjects (as per applicable laws and regulations) in relation to your Personal Information which is being processed by Quiklyy.</p>
      <p>Quiklyy provides you the ability to keep your Personal Information accurate and up-to-date. If at any time you would like to a) rectify, update or correct your Personal Information; b) obtain confirmation on whether or not your Personal Information is processed by it; c) access your Personal Information or exercise your right to data portability; or d) exercise your right to restrict the continuing disclosure of your Personal Information to any third party by Quiklyy in certain circumstances, you are requested to contact us using the contact details mentions in paragraph 15 below. We will require you to provide a valid proof of your identity, in order to ensure that your rights are respected.</p>
      <p>For the exercise of certain rights, you may be required to approach the relevant authority / designated officer as per the provisions of the applicable data protection laws/ Quiklyy may in accordance with the provisions of applicable data protection laws, charge a fee for fulfilling your request, in particular in case of excessive or manifestly unfounded request. Further you acknowledge that the above mentioned rights are not absolute and are subject to limitations as per the applicable data protection laws.</p>
    </div>
  },
  {
    id: "security",
    title: "Confidentiality and Security",
    value:
    <ul style={{margin: '35px 0 0 38px'}}>
        <li> The security and confidentiality of your Personal Information is important to us and Quiklyy has invested significant resources to protect the safekeeping and confidentiality of your personal data. When using external service providers acting as processors, we require that they adhere to the same standards as Quiklyy does. Regardless of where your Personal Information is transferred or stored, we take all steps reasonably necessary to ensure that personal data is kept secure.</li>
        <li> We seek to ensure compliance with the requirements of the Information Technology Act, 2000 and Rules made there under to ensure the protection and preservation of your privacy. We have physical, electronic, and procedural safeguards that comply with the laws prevalent in India to protect your Personal Information. By accepting the terms of this Privacy Policy, you agree that the standards and practices being implemented by us, are reasonable and sufficient for the protection of your Personal Information.</li>
      </ul>
  },
  {
    id: "social",
    title: "Social media",
    value:
    <div>
      <p> Quiklyy operates channels, pages and accounts on some social media sites to inform, assist and engage with customers. Quiklyy monitors and records comments and posts made on these channels about itself in order to improve its products and services.</p>
      <p> Please note that you must not communicate the following information to Quiklyy through such social media sites:</p>
      <p> - sensitive personal data including (i) special categories of personal data meaning any information revealing racial or ethnic origin, political opinions, religious or philosophical beliefs, or trade union membership, and the processing of genetic data, biometric data for the purpose of uniquely identifying a natural person, data concerning health or data concerning a natural person's sex life or sexual orientation and (ii) other sensitive personal data such as criminal convictions and offences and national identification number; - Excessive, inappropriate, offensive or defamatory content. Quiklyy is not responsible for any information posted on those sites other than the information posted by its employees on its behalf. Quiklyy is only responsible for its own use of the Personal Information received through such sites.</p>
    </div>
  },
  {
    id: "changes",
    title: "Changes to this Privacy Policy",
    value:
    'Quiklyy reserves the right to update, change or modify this Privacy Policy at any time. The Privacy Policy shall come to effect from the date of publication of such update, change or modification.'
  },
  {
    id: "disclaimer",
    title: "Disclaimer",
    value:
    <div>
      <p>Quiklyy does not store any account related information or any credit / debit card details. Quiklyy shall not be liable for any loss or damage sustained by Users as a result of any disclosure (inadvertent or otherwise) of any information concerning the User's account, credit cards or debit cards in the course of any online transactions or payments made for any products and/or services offered through the Platform.</p>
      <p>In case any Personal Information is shared by you with Quiklyy, which is not requested by Quiklyy during registration, (whether mandatorily or optionally), Quiklyy will not be liable for any information security breach or disclosure in relation to such information.</p>
      <p>If you have any questions regarding this Privacy Policy or the protection of your Personal Information, please contact Quiklyy’s Data Protection Officer/ Grievance Officer at the following</p>
    </div>
  
  },
  {
    id: "dataOfficer",
    title: "Data Protection Officer/ Grievance Officer",
    value:
    <div>
      In case you have any complaints and/or grievances in relation to the processing of your Personal Information you can send your complaints via e-mail to our grievance officer:
      <p >Grievance Officer</p>
      <p style={{marginTop: 0}}>Quiklyy</p>
      <p style={{marginTop: 0}}>Delhi</p>
      <p style={{marginTop: 0}}>Email: <span>hello@quiklyy.com</span></p>
    </div>
  
  },
  
];

function Privacy() {
  return (
    <TnPLayout>
      <Text fontWeight="600" fontSize="2.2rem" textAlign="center" margin= "0 0 2.8rem 0">
        Privacy Policy
      </Text>
      <Box
        padding={{ lg: "2em", sm: "0.5em" }}
        margin="1em auto"
        textAlign="justify"
        marginBottom="-0.8rem"
      >
           <Text fontWeight= "600" fontSize="2xl">Table of Contents</Text>
        <ul >
          {Data.map((each) => (
            <li key={each.id} style={{ margin: "1em" }}>
              <Link style={{color:"#09ae36",fontWeight:"500"}}  href={`#${each.id}`}>{each.title}</Link>
            </li>
          ))}
        </ul>
      </Box>
      <Box >
        {Data.map((each) => (
          <Box
            p={{ lg: "5", sm: "0" }}
            marginY="1em"
            key={each.id}
            id={each.id}
          >
            <Text fontWeight="600" fontSize="2xl">{each.title}</Text>
            <Text marginY="1em">{each.value}</Text>
          </Box>
        ))}
      </Box>
    </TnPLayout>
  );
}

export default Privacy;
