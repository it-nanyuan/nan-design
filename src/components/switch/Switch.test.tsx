import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Switch } from "./Switch";

describe("Switch", () => {
  it("toggles checked state through onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Switch checked={false} onChange={onChange} />);

    await user.click(screen.getByRole("switch"));
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
