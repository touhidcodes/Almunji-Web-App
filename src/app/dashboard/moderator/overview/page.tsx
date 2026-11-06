import { useUserInfo } from "@/hooks/useUserInfo";

export default function ModeratorOverviewPage() {
  const { user, loading } = useUserInfo();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Moderator Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Content Items</h3>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Pending Reviews</h3>
          <p className="text-3xl font-bold">56</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h3 className="text-lg font-semibold mb-2">Reports</h3>
          <p className="text-3xl font-bold">23</p>
        </div>
      </div>
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-xl font-semibold mb-4">Moderation Actions</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">Content Review</h4>
              <p className="text-sm text-gray-500">Review and approve content</p>
            </div>
          </div>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div>
              <h4 className="font-medium">User Reports</h4>
              <p className="text-sm text-gray-500">Handle user reports</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
