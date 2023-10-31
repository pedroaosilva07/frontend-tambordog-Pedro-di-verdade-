import React from "react";

import InputMask from "react-input-mask";

export default function InputCPF(props: any) {
  return (
    <>
      <InputMask {...props} mask="999.999.999-99" maskChar=" " />
    </>
  );
}
