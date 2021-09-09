import { Flex, Spinner } from "@chakra-ui/core";
import React, { Fragment, useState } from "react";

const Embed = ({ children }) => <>{children}</>;

const PDF = ({ pdfLocation, ...rest }) => {
  const [embedLoading, toggleEmbedLoading] = useState(true);

  return (
    <Fragment>
      {embedLoading && (
        <Flex width="100%" height="100%">
          <Spinner speed="0.9s" />
        </Flex>
      )}

      <iframe
        loading="lazy"
        frameBorder="0"
        // TODO: Make this something meaningful.
        title={pdfLocation}
        src={`${pdfLocation}?file=pdf#view=fitH`}
        onLoad={() => toggleEmbedLoading(false)}
        style={{ width: "100%", height: "600px" }}
        {...rest}
      />

      {/*
       * //! Google Docs doesn't load on slow internet.
       */}
      {/* <iframe
        loading="lazy"
        frameBorder="0"
        title={`${data.first_name}'s resume`}
        src={`https://docs.google.com/gview?url=${data.resume}&embedded=true`}
        style={{ width: "100%", height: "600px" }}
        onLoad={() => toggleResumeLoading(false)}
      /> */}

      {/*
       * //? <embed /> & <object /> has only 63.45% support globally.
       * //? We better use iframe with >80% support.
       * //* @see https://caniuse.com/?search=%3Cobject%3E
       * //* @see https://caniuse.com/?search=%3Cembed%3E
       */}
      {/* <embed
        onLoad={() => toggleResumeLoading(false)}
        src={`${data.resume}`}
        style={{ width: "100%", height: "600px" }}
      ></embed>

      <object
        type="application/pdf"
        data={`${data.resume}`}
        style={{ width: "100%", height: "600px" }}
        onLoad={() => toggleResumeLoading(false)}
      /> */}
    </Fragment>
  );
};

Embed.PDF = PDF;

export default Embed;
