import React from "react";
import { API, BASE } from "../../utils/api";
import { Helmet } from "react-helmet";

const Meta = ({ title, description, image, imageAlt }) => {
  if (description && description.length > 250)
    description = description.substring(0, 120) + "...";

  return (
    <Helmet>
      <base href={BASE} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:url" content={window.location.href} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:locale" content="pl_PL" />
      <meta property="og:type" content="website" />
      
      <meta property="og:image" content={`${API}${image}`} />
      <meta property="og:image:width" content="640" />
      <meta property="og:image:height" content="385" />
      <meta property="og:image:alt" content={imageAlt} />
    </Helmet>
  );
};

export default Meta;
