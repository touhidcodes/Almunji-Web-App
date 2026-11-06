import { useUserInfo } from "@/hooks/useUserInfo";

export default function ModeratorContentPage() {
  const { user, loading } = useUserInfo();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold">Content Moderation</h1>
        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
          Refresh
        </button>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 mb-6 border-b">
        <button className="px-4 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">
          All Content
        </button>
        <button className="px-4 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
          Pending
        </button>
        <button className="px-4 py-2 border-b-2 border-transparent text-gray-500 hover:text-gray-700">
          Reported
        </button>
      </div>

      {/* Content List */}
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-lg shadow-sm border p-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📖</span>
              </div>
              <div className="flex-1">
                <h3 className="font-medium text-lg">Sample Surah Content {i}</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted by user@example.com
                </p>
                <p className="text-sm text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <div className="flex gap-2">
                <button className="px-3 py-1.5 text-sm bg-green-600 text-white rounded hover:bg-green-700">
                  Approve
                </button>
                <button className="px-3 py-1.5 text-sm bg-red-600 text-white rounded hover:bg-red-700">
                  Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
