import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { Select } from "./Select";

const options = [
  { label: "Hangzhou", value: "hangzhou" },
  { label: "Shanghai", value: "shanghai" },
];

describe("Select", () => {
  it("selects an option and calls onChange", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<Select options={options} placeholder="Pick one" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: /pick one/i }));
    await user.click(screen.getByRole("option", { name: /hangzhou/i }));

    expect(onChange).toHaveBeenCalledWith("hangzhou", options[0]);
    expect(screen.getByRole("button", { name: /hangzhou/i })).toBeTruthy();
  });
});
