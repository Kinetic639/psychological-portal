import React, { type ReactNode } from "react";

export function BackgroundWrapper({
	children,
	containerStyle = "",
	contentStyle = "",
}: {
	children: ReactNode;
	containerStyle?: string;
	contentStyle?: string;
}) {
	return (
		<div className={`mx-auto w-full ${containerStyle}`}>
			<div className={`mx-auto w-full max-w-6xl ${contentStyle}`}>{children}</div>
		</div>
	);
}
