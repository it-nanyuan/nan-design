import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Modal } from "./Modal";

describe("Modal", () => {
  it("fires onCancel when close button is clicked", async () => {
    const user = userEvent.setup();
    const onCancel = vi.fn();

    render(
      <Modal open title="Delete project" onCancel={onCancel}>
        Body
      </Modal>,
    );

    await user.click(screen.getByRole("button", { name: /close/i }));
    expect(onCancel).toHaveBeenCalledTimes(1);
  });
});
