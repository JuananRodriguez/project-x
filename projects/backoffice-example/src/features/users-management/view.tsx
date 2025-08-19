import React from "react";
import { ReactiveTitle } from "../../components/reactive-title/ReactiveTitle";

export function Main() {
  return (
    <div>
      <ReactiveTitle.Emitter>
        <h1>User Management Title</h1>
      </ReactiveTitle.Emitter>
      User management view
    </div>
  );
}
