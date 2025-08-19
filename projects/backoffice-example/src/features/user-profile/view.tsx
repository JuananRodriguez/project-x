import React from "react";
import { ReactiveTitle } from "../../components/reactive-title/ReactiveTitle";

export function Main() {
  return (
    <div>
      <ReactiveTitle.Emitter>
        <h1>User Profile Title</h1>
      </ReactiveTitle.Emitter>
      User Profile view
    </div>
  );
}
