import * as React from 'react';

export interface HelloProps {
	compiler: string;
	framework: string;
}

export const Hello = (props: HelloProps) => (
	<div>
		<h1>
			Hello from {props.compiler} and {props.framework} my
			glip glops!!
		</h1>
	</div>
);
