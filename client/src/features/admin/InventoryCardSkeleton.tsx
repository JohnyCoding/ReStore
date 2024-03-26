import { Skeleton, TableCell } from "@mui/material";

export default function InventoryCardSkeleton() {
	return (
		<>
			<TableCell component="th" scope="row">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="left">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="right">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="center">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="center">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="center">
				<Skeleton animation="wave" />
			</TableCell>
			<TableCell align="right">
				<Skeleton animation="wave" />
			</TableCell>
		</>
	);
}
