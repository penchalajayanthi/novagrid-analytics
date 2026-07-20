import type { Customer } from "../types/customer.types";

interface Props {
  customer: Customer;
}

const PurchaseHistoryTab = ({ customer }: Props) => {
  const totalValue = customer.purchaseHistory.reduce(
    (sum, order) => sum + order.value,
    0
  );

  return (
    <div className="space-y-6">

      {/* Summary Card */}

      <div className="grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Orders
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            {customer.purchaseHistory.length}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Total Purchase Value
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            ₹{totalValue.toLocaleString()}
          </h2>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <p className="text-sm text-slate-500">
            Completed Orders
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {
              customer.purchaseHistory.filter(
                (o) => o.status === "Completed"
              ).length
            }
          </h2>
        </div>

      </div>

      {/* Purchase Table */}

      <div className="overflow-hidden rounded-2xl border bg-white shadow-sm">

        <div className="border-b px-6 py-4">

          <h2 className="text-lg font-semibold">
            Purchase History
          </h2>

        </div>

        <div className="overflow-x-auto">

          <table className="min-w-full">

            <thead className="bg-slate-50">

              <tr>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Order
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Date
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Value
                </th>

                <th className="px-6 py-4 text-left text-xs font-semibold uppercase text-slate-500">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {customer.purchaseHistory.map((purchase) => (

                <tr
                  key={purchase.id}
                  className="border-t hover:bg-slate-50"
                >

                  <td className="px-6 py-4 font-medium">
                    {purchase.order}
                  </td>

                  <td className="px-6 py-4">
                    {purchase.date}
                  </td>

                  <td className="px-6 py-4 font-semibold">
                    ₹{purchase.value.toLocaleString()}
                  </td>

                  <td className="px-6 py-4">

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${
                        purchase.status === "Completed"
                          ? "bg-green-100 text-green-700"
                          : purchase.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {purchase.status}
                    </span>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default PurchaseHistoryTab;