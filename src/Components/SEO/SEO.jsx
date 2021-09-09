import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Helmet } from "react-helmet";
import PropTypes from "prop-types";

const SEO = ({ title, description, image, article = false }) => {
  const history = useHistory();

  const [baseURL, setBaseURL] = useState(undefined);

  useEffect(() => {
    setBaseURL(window.location.origin);
  }, []);

  const seo = Object.freeze({
    name: "Quiklyy",
    title: `Quiklyy — ${title}`,
    description:
      description ||
      `You cannot find the job, select the job you like from the job`,
    image: image || `/quiklyy.png`,
    URL: `${baseURL}${history.location.pathname}`,
    locale: `en_US`,
    type: article ? `article` : `website`,
    twitterUsername: `quiklyy`,
  });

  return (
    <Helmet
      title={seo.title}
      link={[
        {
          rel: `canonical`,
          href: seo.URL,
        },
      ]}
      script={[]}
    >
      <html key="base-html" lang="en" dir="ltr" />
      <meta name="robots" content="index,follow" />
      <meta name="googlebot" content="index,follow" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />

      {/* Open Graph: Start*/}
      {seo.URL && <meta property="og:url" content={seo.URL} />}
      {seo.title && <meta property="og:title" content={seo.title} />}
      {seo.description && (
        <meta property="og:description" content={seo.description} />
      )}
      {seo.image && <meta property="og:image" content={seo.image} />}
      {seo.locale && <meta property="og:locale" content={seo.locale} />}
      {seo.type && <meta property="og:type" content={seo.type} />}
      {seo.name && <meta property="og:site_name" content={seo.name} />}
      {/* Open Graph: End */}

      {/* Twitter: Start */}
      <meta name="twitter:card" content="summary_large_image" />
      {seo.twitterUsername && (
        <meta name="twitter:creator" content={seo.twitterUsername} />
      )}
      {seo.twitterUsername && (
        <meta name="twitter:site" content={seo.twitterUsername} />
      )}
      {seo.title && <meta name="twitter:title" content={seo.title} />}
      {seo.description && (
        <meta name="twitter:description" content={seo.description} />
      )}
      {seo.image && <meta name="twitter:image" content={seo.image} />}
      {/* Twitter: End */}
    </Helmet>
  );
};

export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
  article: PropTypes.bool,
};
