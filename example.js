// import SearchHeader
// import axios

import React, { useState } from "react";

export default function Example() {
  const [show, onShow] = useState(true);

  return (
    show && (
      <SearchHeader
        onGetSuggestions={async (text) => {
          if (text) {
            const response = await axios.get(
              "http://suggestqueries.google.com/complete/search",
              {
                params: {
                  client: "firefox",
                  q: text,
                },
              }
            );

            const [, list] = response.data;

            return list;
          }
          return [];
        }}
        onSearch={(text) => console.log(text)}
        onHide={() => {
          console.log("Close");
          onShow(false);
        }}
        placeholder="Find item"
      />
    )
  );
}
