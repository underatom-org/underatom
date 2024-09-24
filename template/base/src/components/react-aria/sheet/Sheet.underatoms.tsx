import {
  Dialog as AriaDialog,
  DialogProps as AriaDialogProps,
  DialogTrigger as AriaDialogTrigger,
  DialogTriggerProps as AriaDialogTriggerProps,
  ModalOverlay as AriaModalOverlay,
  Modal as AriaModal,
} from "react-aria-components";

import { sheetClass, SheetStyleProps } from "../../../styles/sheet";
import { modalOverlayClass, ModalOverlayStyleProps } from "../../../styles/modal-overlay";

export type USheetRootProps = AriaDialogProps & SheetStyleProps & ModalOverlayStyleProps;
export const USheetRoot = (props: USheetRootProps) => {
  return (
    <AriaModalOverlay
      isDismissable
      className={modalOverlayClass({ className: props.className, modalOverlayProps: props })}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 20,
      }}
    >
      <AriaModal isDismissable style={{ zIndex: 20 }}>
        <AriaDialog
          {...props}
          className={sheetClass({ className: props.className, sheetProps: props })}
          style={{ position: "fixed", inset: 0, zIndex: 20, ...props.style }}
        >
          {props.children}
        </AriaDialog>
      </AriaModal>
    </AriaModalOverlay>
  );
};

export type USheetTriggerRootProps = AriaDialogTriggerProps;
export const USheetTriggerRoot = AriaDialogTrigger;
