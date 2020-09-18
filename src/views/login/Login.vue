<template>
<div class="app flex-row align-items-center" id="login-page">
  <div class="grain-color"></div>
  <div class="container">
    <b-row class="justify-content-center">
      <b-col md="5">
        <b-card-group>
          <b-card no-body class="p-4">
            <b-card-body>
              <h3 class="text-center">Login</h3>
              <el-form
                :model="user"
                :rules="userValid"
                ref="loginForm"
                label-width="100%"
                label-position="top"
                @submit.native.prevent
              >
                <el-form-item id="login_id" label="Username" prop="account">
                  <el-input
                    prefix-icon="el-icon-user"
                    v-model.trim="user.account"
                    clearable
                  ></el-input>
                </el-form-item>

                <el-form-item label="Password" prop="password">
                  <el-input
                    prefix-icon="el-icon-unlock"
                    v-model.trim="user.password"
                    show-password
                  ></el-input>
                </el-form-item>
                <el-form-item class="text-center mb-0">
                  <el-button class="ladda-button"
                             type="primary"
                             @click="submitLogin" v-ladda
                             native-type="submit"
                  >Sign in</el-button>
                </el-form-item>
              </el-form>
            </b-card-body>
          </b-card>
        </b-card-group>
      </b-col>
    </b-row>
  </div>
</div>
</template>

<script lang="js" src="./Login.js"/>
<link type="scss" src="./Login.scss"/>
