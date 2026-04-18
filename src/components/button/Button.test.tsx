import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

describe("Button", () => {
  it("renders children and handles click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(<Button onClick={onClick}>Create</Button>);

    await user.click(screen.getByRole("button", { name: "Create" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("disables interaction when loading", () => {
    render(<Button loading>Create</Button>);
    expect((screen.getByRole("button", { name: "Create" }) as HTMLButtonElement).disabled).toBe(true);
  });
});
