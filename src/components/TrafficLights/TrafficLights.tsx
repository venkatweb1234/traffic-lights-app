import { useEffect, useState, useCallback } from "react";
import { trafficColor, trafficDirections } from "../../common/common";
import { Container, DirectionDiv, ColorDiv, ChildDiv } from "./TrafficStyles";

interface ITrafficLightData {
  id: number;
  direction: number;
  color: number;
}

const TrafficLights = () => {
  const [data, setData] = useState<ITrafficLightData[]>([]);
  const [error, setError] = useState<any>();
  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(
        "https://localhost:7286/TrafficLight/GetTrafficData"
      );
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("Error is occurred");
    }
  }, []);

  useEffect(() => {
    const interval = setInterval(fetchData, 300);
    return () => clearInterval(interval);
  }, [fetchData]);
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      {data.length > 0 && (
        <Container>
          {data.map((value: ITrafficLightData, index) => (
            <ChildDiv key={index}>
              <DirectionDiv>{trafficDirections[value.direction]}</DirectionDiv>
              <ColorDiv color={trafficColor[value.color]}></ColorDiv>
            </ChildDiv>
          ))}
        </Container>
      )}
    </>
  );
};

export default TrafficLights;
