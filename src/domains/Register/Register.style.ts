import { createStyles } from "theme";

export default createStyles(
  ({ spacing, typography, palette }) => ({
    root: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      gap: "16px",
      width: "100%",
      maxWidth: "600px",
      minHeight: "100vh",
      margin: "0 auto",

      "& .ant-form-item": {
        margin: spacing(0),
      },
      "& .ant-form-item-explain-error": {
        margin: spacing(0.5, 0, 0),
        ...typography.body2Medium,
      },
      "& .ant-input": {
        lineHeight: "2",
      },
      "& .ant-select-selector": {
        height: "40px !important",
        display: "flex",
        alignItems: "center",
        lineHeight: "2",
      },
      "& .ant-input-affix-wrapper-rtl": {
        padding: spacing(0.5, 1.5, 0.5, 0.5),
      },
      "& .ant-input-affix-wrapper-rtl .ant-input-prefix": {
        margin: spacing(0, 0, 0, 1),
      },
      "& .ant-input::placeholder,.ant-select-selection-placeholder": {
        fontSize: "14px",
        color: palette.black.main,
      },
      "& .ant-checkbox + span": {
        fontSize: "14px",
      },
      "& .ant-form-item-control-input-content": {
        display: "flex",
        flexDirection: "column",
        gap: "8px",
        fontSize: "14px",
      },
      "& .ant-btn": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      },
      "& .ant-btn svg": {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
      },
      "& span.ant-form-item-children-icon": {
        display: "none",
      },
      "& .ant-form-rtl .ant-form-item-has-feedback .ant-input-affix-wrapper .ant-input-suffix": {
        padding: spacing(0),
      },
      "& .ant-input-affix-wrapper-rtl .ant-input-suffix": {
        margin: spacing(0, 0.5),
      },
    },
    registerStepForm: {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      backgroundColor: "#fff",
      padding: spacing(2, 4, 2),
      borderRadius: "4px",
      boxShadow: "2px 2px 6px rgb(40 40 40 / 20%)",
      marginBottom: spacing(2),
    },
    title: {
      ...typography.h5,
      textAlign: "center",
    },
    registerStepError: {
      ...typography.body1Medium,
      color: palette.error.main,
    },
    registerStepSuccess: {
      ...typography.h6,
      color: palette.primary.main,
    },
    addButton: {
      width: "128px",
      padding: spacing(0),
      alignSelf: "flex-end",
      "& a": {
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
      },
    },
  }),
  { name: "register" }
);
