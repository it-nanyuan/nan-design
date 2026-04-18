import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Pagination } from "./Pagination";

describe("Pagination", () => {
  it("calls onChange when next page is clicked", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Pagination current={1} total={30} pageSize={10} onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "下一页" }));
    expect(onChange).toHaveBeenCalledWith(2);
  });
});
