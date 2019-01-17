import * as React from 'react';
import { Counter } from './Counter';

// Simple interface for component props
export interface HelloProps {
	compiler: string;
	framework: string;
}

// Declare props as type HelloProps
export const Hello = (props: HelloProps) => (
	<div>
		<h1>
			Hello from {props.compiler} and {props.framework} my
			glip glops!!
		</h1>
		<Counter />
	</div>
);
