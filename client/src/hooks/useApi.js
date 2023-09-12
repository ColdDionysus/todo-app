import { useState } from "react";
import { URLS } from "../constants";
import axios from "axios";

export default function useApi() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const create = async ({ url, payload }) => {
    try {
      setLoading(true);
      console.log({ url, payload });
      await axios.post(url, payload);
    } catch (e) {
      setError(e);
    } finally {
      setLoading(false);
      list({ url: URLS.TODOS });
    }
  };
  const list = async ({ url }) => {
    setLoading(true);
    try {
      const { data } = await axios(url);
      setData(data.data);
    } catch (e) {
      setLoading(false);
      setError(e);
    } finally {
      setLoading(false);
    }
  };
  const updateStatus = () => {};
  const deleteById = () => {};

  return { data, error, loading, create, list, updateStatus, deleteById };
}
