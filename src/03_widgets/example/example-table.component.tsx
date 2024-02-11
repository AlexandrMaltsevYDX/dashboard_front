import {Table} from "antd";
import {useQuery} from "react-query";
import {useExampleTables} from "./example-table.store";
import {useEffect} from "react";

export const ExampleTableComponent = () => {
  const url: string = "https://jsonplaceholder.typicode.com/users";

  const {content, updateContent} = useExampleTables();

  const fetchUsers = async () => {
    const response = await fetch(url);
    const data = await response.json();
    updateContent(data);
  };

  useEffect(() => {
    setInterval(() => fetchUsers(), 10000);
  }, []);

  const {isLoading, error} = useQuery({
    queryFn: fetchUsers,
    queryKey: ["users"],
  });

  const columns = [
    {
      title: "id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "username",
      dataIndex: "username",
      key: "username",
    },
  ];

  if (error) {
    // @ts-ignore
    return <div>{error.message}</div>;
  }

  return (
    <div>
      <Table
        loading={isLoading}
        title={() => "Example"}
        dataSource={content}
        columns={columns}
      />
    </div>
  );
};
