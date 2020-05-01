<template>
  <v-container>
    <h1>Training Roles</h1>
    <a href="https://cs.mvnu.edu/classes/csc3032/de-steward/disastersim/roles/">
      <h2>Click here to edit roles</h2>
    </a>

    <RoleCard
      v-for="(role,j) in roles"
      :key="j"
      :title="role.role_title"
      :subTitle="role.role_category"
      :photo_url="role.image"
      :text="role.role_description"
    />
  </v-container>
</template>

<script>
import RoleCard from "./RoleCard";
import axios from "axios";
// var roles = [];
export default {
  name: "Role",
  components: {
    RoleCard
  },
  data: () => ({
    roles: []
  }),
  mounted: function() {
    console.log("hello form vue!");
    this.getRoles();
  },

  methods: {
    getRoles: function() {
      let self = this;
      axios
        .get(
          "https://cs.mvnu.edu/classes/csc3032/de-steward/disastersim/roles/api/roles.php"
        )
        .then(function(response) {
          console.log("this is the roles response data: ");
          console.log(response.data);
          self.roles = response.data;
          const filtRoles = response.data.filter(
            role => role.role_boolean === "1"
          );
          console.log("this is the filtered roles");
          console.log(filtRoles);
          self.roles = filtRoles;
        })
        .catch(function(error) {
          console.log("get roles errors:");
          console.log(error);
        });
    }
  }
};
</script>

<style>
</style>