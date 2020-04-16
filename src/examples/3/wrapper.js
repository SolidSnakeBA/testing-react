import React, { useEffect, useRef } from "react";
import angular from "angular";

import CounterModule from "./counter.module";

export default function Wrapper() {
  const domRef = useRef(null);

  useEffect(() => {
    angular.bootstrap(domRef.current, [CounterModule.name]);
  }, []);

  return (
    <div ref={domRef}>
      <my-counter />
    </div>
  );
}
