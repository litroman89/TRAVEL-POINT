// import { renderHook, act } from "@testing-library/react-hooks";
import { renderHook, act } from "@testing-library/react";
import useHttp from "@/hooks/useHttp";

test("should make a successful request", async () => {
  const { result } = renderHook(() => useHttp());

  await act(async () => {
    const response = await result.current.request(
      import.meta.env.VITE_USERS_URL
    );

    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBeNull();
    expect(response).not.toBeNull();
  });
});
