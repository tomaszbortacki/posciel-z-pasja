import React from 'react';
import ReactMarkdown from "react-markdown/with-html";

const Description = ({ desc }) => {
    return (
        <ReactMarkdown
            source={desc}
            escapeHtml={false}
        />
    );
}

export default Description;