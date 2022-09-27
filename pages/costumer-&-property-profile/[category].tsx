import InnerNav from "../../components/Layouts/InnerNav";
import CPPTable from "../../components/CPPTable";
import View from "../../components/CPP/View";
import Update from "../../components/CPP/Update";
import { useRouter } from "next/router";
import AddCustomer from "../../components/CPP/AddCustomer";
import AddProperty from "../../components/CPP/AddProperty";
import ViewProperty from "../../components/CPP/ViewProperty";
import UpdateProperty from "../../components/CPP/UpdateProperty";

export default function Category() {
    const router = useRouter();

    return (
        <div>
            <InnerNav page="CPP" />
            {router.query.view_customer === undefined &&
                router.query.update_customer === undefined &&
                router.query.add_customer === undefined &&
                router.query.add_property === undefined && <CPPTable />}

            {router.query.view_customer !== undefined && (
                <View id={router.query.view_customer} />
            )}

            {router.query.update_customer !== undefined && (
                <Update id={router.query.update_customer} />
            )}
            {router.query.add_customer !== undefined && <AddCustomer />}
            {router.query.add_property !== undefined && <AddProperty />}

            {router.query.view_property !== undefined && (
                <ViewProperty id={router.query.view_property} />
            )}
            {router.query.update_property !== undefined && (
                <UpdateProperty id={router.query.update_property} />
            )}
        </div>
    );
}
