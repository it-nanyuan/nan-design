import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { NavMenu } from "./NavMenu";

describe("NavMenu", () => {
  it("renders items and handles click", async () => {
    const user = userEvent.setup();
    const onClick = vi.fn();

    render(
      <NavMenu
        activeKey="dashboard"
        items={[
          { key: "dashboard", label: "Dashboard" },
          { key: "orders", label: "Orders", onClick },
        ]}
      />,
    );

    await user.click(screen.getByRole("button", { name: "Orders" }));
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
