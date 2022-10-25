export default {
  clearMocks: true,
  moduleNameMapper: {
    "@/(.*)": "<rootDir>/src/$1",
  },
  preset: "ts-jest",
  roots: ["<rootDir>/src/"],
  testMatch: ["**/__tests__/**/*.test.ts?(x)"],
  transform: {
    "^.+\\.(t|j)s$": "ts-jest",
  },
};
