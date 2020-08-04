import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchDashboard } from "../../store/actionCreators";

import PostCard from "../../components/PostCard/PostCard";

import { DashboardContainer } from "./Dashboard.styled";

const Dashboard = () => {
	const dispatch = useDispatch();

	const { dashboardPosts } = useSelector((state) => state);

	console.log(dashboardPosts);

	useEffect(() => {
		dispatch(fetchDashboard());
	}, [dispatch]);

	return (
		<DashboardContainer>
			{dashboardPosts.map((post) => (
				<PostCard key={post.id} {...post} />
			))}
		</DashboardContainer>
	);
};

export default Dashboard;
