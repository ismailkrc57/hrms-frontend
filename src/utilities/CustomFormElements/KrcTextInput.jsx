import { useField } from "formik";
import React from "react";
import { Label } from "semantic-ui-react";

export default function KrcTextInput({ ...props }) {
  const [field, meta] = useField(props);
  return (
    <div className="col">
      <div style={{ marginBottom: 6 }}>
        <p
          className="text-center text-body"
          style={{
            marginLeft: 0,
            marginBottom: 0,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          {props.labelName}
        </p>
        <div
          className="input-group input-group-sm text-lowercase border rounded d-flex flex-row align-content-start"
          style={{
            fontSize: 16,
            borderRadius: 0,
            background: "transparent",
            borderStyle: "solid",
            borderColor: "var(--bs-blue)",
          }}
        >
          <span className="input-group-text">
            <i className={props.icon} style={{ fontSize: 15 }} />
          </span>
          <input
            className="form-control form-control-sm"
            {...field}
            {...props}
          />
        </div>
        {meta.touched && !!meta.error ? (
          <Label pointing basic color="red" content={meta.error} />
        ) : null}
      </div>
    </div>
  );
}
