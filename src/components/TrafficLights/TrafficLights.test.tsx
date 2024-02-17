import { render, screen, waitFor } from "@testing-library/react";
import TrafficLights from "./TrafficLights";
import { trafficDirections } from "../../common/common";

const mockData = [
  { id: 1, direction: 0, color: 1 },
  { id: 2, direction: 1, color: 2 },
];
describe("TrafficLights component", () => {
  beforeEach(() => {
    jest.spyOn(global, "fetch").mockResolvedValueOnce({
      json: jest.fn().mockResolvedValue(mockData),
      ok: true,
      redirected: false,
      status: 200,
      statusText: "OK",
    } as unknown as Response);
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test("renders traffic lights with fetched data", async () => {
    render(<TrafficLights />);

    await waitFor(() => {
      expect(
        screen.getByText(trafficDirections[mockData[0].direction])
      ).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(
        screen.getByText(trafficDirections[mockData[1].direction])
      ).toBeInTheDocument();
    });
  });

  test("handles fetch error", async () => {
    jest.spyOn(global, "fetch").mockRejectedValueOnce(new Error("Fetch error"));

    render(<TrafficLights />);

    await waitFor(() => {
      expect(screen.getByText("Error is occurred")).toBeInTheDocument();
    });
  });
});
