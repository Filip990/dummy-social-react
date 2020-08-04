import axios from "axios";
import { appID } from "../utils/appId";

export const getUserDashboard = () =>
	axios.get("https://dummyapi.io/data/api/post", {
		headers: { "app-id": `${appID}` },
	});
