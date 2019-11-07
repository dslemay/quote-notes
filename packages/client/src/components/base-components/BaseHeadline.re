open Css;
open Belt;

type level =
  | H1
  | H2
  | H3
  | H4;

module Styles = {
  let h1 = style([color(pink)]);
  let h2 = style([color(red)]);
  let h3 = style([color(green)]);
  let h4 = style([color(blue)]);

  let override = variant =>
    switch (variant) {
    | Some(H1) => h1
    | Some(H2) => h2
    | Some(H3) => h3
    | Some(H4) => h4
    | None => ""
    };
};

[@react.component]
let make = (~children, ~className=?, ~is, ~variant=?) => {
  switch (is) {
  | H1 =>
    <h1
      className={merge([
        Styles.h1,
        Styles.override(variant),
        Option.getWithDefault(className, ""),
      ])}>
      children
    </h1>
  | H2 =>
    <h2
      className={merge([
        Styles.h2,
        Styles.override(variant),
        Option.getWithDefault(className, ""),
      ])}>
      children
    </h2>
  | H3 =>
    <h3
      className={merge([
        Styles.h3,
        Styles.override(variant),
        Option.getWithDefault(className, ""),
      ])}>
      children
    </h3>
  | H4 =>
    <h4
      className={merge([
        Styles.h4,
        Styles.override(variant),
        Option.getWithDefault(className, ""),
      ])}>
      children
    </h4>
  };
};