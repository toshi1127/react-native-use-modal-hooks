import React, { memo } from "react";
import { ModalType } from "./ModalContext";
/**
 * Modal Root Props
 */
interface ModalRootProps {
    /**
     * Map of modal instances associated by unique ids
     */
    modals: Record<string, ModalType>;
}

/**
 * Modal renderer props
 */
interface ModalRendererProps {
    /**
     * Functional component representing the modal
     */
    component: ModalType;
}

/**
 * Component responsible for rendering the modal.
 *
 * The identity of `Component` may change dependeing on the inputs passed to
 * `useModal`. If we simply rendered `<Component />` then the modal would be
 * susceptible to rerenders whenever one of the inputs change.
 */
const ModalRenderer = memo(({ component, ...rest }: ModalRendererProps) =>
    component(rest)
);

/**
 * Modal Root
 *
 * Renders modals using react portal.
 */
export const ModalRoot = memo(
    ({
        modals,
    }: ModalRootProps) => {
        return (
            <>
                {Object.keys(modals).map(key => (
                    <ModalRenderer key={key} component={modals[key]} />
                ))}
            </>
        )
    }
);