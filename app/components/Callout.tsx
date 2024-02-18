"use client";
import InfoIcon from "../../content/images/icons/info.svg";
import WarningIcon from "../../content/images/icons/warning.svg";
import ErrorIcon from "../../content/images/icons/error.svg";
import TipIcon from "../../content/images/icons/tip.svg";
import NoteIcon from "../../content/images/icons/note.svg";

import styled from "@emotion/styled";

type CalloutStyledProps = {
  calloutStyles: StyleInfo;
};

const CalloutStyled = styled.div<CalloutStyledProps>`
  background-color: ${(props) => props.calloutStyles.bgColor};
  border-left: 5px solid ${(props) => props.calloutStyles.borderColor};
  padding: 8px 10px;
  border-radius: 8px;

  p {
    margin: 5px 0;
  }
`;

const IconTitleContainer = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;

  h6 {
    font-weight: 600;
  }
`;

const CalloutIcon = styled.i`
  svg {
    width: 1.25em;
    height: 1.25em;
  }
`;

type StyleInfo = {
  bgColor: string;
  icon: React.ReactNode;
  title: string;
  borderColor: string;
};

const calloutStyleMap: Record<CalloutType, StyleInfo> = {
  note: {
    bgColor: "var(--callout-note)",
    icon: <NoteIcon />,
    title: "Note",
    borderColor: "#D4D5D8",
  },
  info: {
    bgColor: "var(--callout-info)",
    icon: <InfoIcon />,
    title: "Information",
    borderColor: "#4BB3D3",
  },
  tip: {
    bgColor: "var(--callout-tip)",
    icon: <TipIcon />,
    title: "Tip",
    borderColor: "#009400",
  },
  warn: {
    bgColor: "var(--callout-warn)",
    icon: <WarningIcon />,
    title: "Warning",
    borderColor: "#E6A700",
  },
  error: {
    bgColor: "var(--callout-error)",
    icon: <ErrorIcon />,
    title: "Error",
    borderColor: "#E13238",
  },
};

type CalloutType = "note" | "info" | "tip" | "warn" | "error";
type Props = {
  children: React.ReactNode;
  title?: string;
  type?: CalloutType;
  icon?: React.ReactNode;
};

function Callout({ children, type = "info", title, icon }: Props) {
  const calloutStyles = calloutStyleMap[type];

  return (
    <CalloutStyled calloutStyles={calloutStyles}>
      <IconTitleContainer>
        <CalloutIcon title={calloutStyles.title}>
          {icon || calloutStyles.icon}
        </CalloutIcon>
        {title && <h6>{title}</h6>}
      </IconTitleContainer>
      {children}
    </CalloutStyled>
  );
}

export default Callout;
