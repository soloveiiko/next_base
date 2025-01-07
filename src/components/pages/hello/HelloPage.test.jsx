import { HelloPage } from "@/components";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

const mockMessages = {
  "hello-page": {
    title: "Hello, World!",
    subtitle: "Welcome to our page",
    description: "This is a description for the hello page.",
  },
};

const renderWithIntl = (
  ui,
  { messages = mockMessages, locale = "en" } = {},
) => {
  return render(
    <NextIntlClientProvider messages={messages} locale={locale}>
      {ui}
    </NextIntlClientProvider>,
  );
};

describe("HelloPage", () => {
  it("renders the page with correct translations", () => {
    renderWithIntl(<HelloPage />);

    expect(screen.getByText("Hello, World!")).toBeInTheDocument();
    expect(screen.getByText("Welcome to our page")).toBeInTheDocument();
    expect(
      screen.getByText("This is a description for the hello page."),
    ).toBeInTheDocument();
  });

  it("applies the correct classes for styling", () => {
    renderWithIntl(<HelloPage />);

    const container = screen.getByRole("heading", { level: 1 }).closest("div");
    expect(container).toHaveClass(
      "flex flex-col items-center justify-center gap-1",
    );

    expect(screen.getByRole("heading", { level: 1 })).toHaveClass(
      "text-2xl font-bold",
    );
    expect(screen.getByRole("heading", { level: 2 })).toHaveClass(
      "text-lg font-semibold",
    );
  });
});
