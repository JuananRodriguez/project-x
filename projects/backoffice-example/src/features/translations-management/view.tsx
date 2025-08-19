import React from "react";
import { ReactiveTitle } from "../../components/reactive-title/ReactiveTitle";

export function Main() {
  return (
    <div>
      <ReactiveTitle.Emitter>
        <h1>Translations management Title</h1>
      </ReactiveTitle.Emitter>
      Translation management view
    </div>
  );
}
