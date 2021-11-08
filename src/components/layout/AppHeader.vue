<template>
    <div>
        <b-navbar toggleable="lg" type="dark" class="app-header">
            <b-navbar-brand href="#" class="text-white">Bake Me</b-navbar-brand>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="/">Home</b-nav-item>
            </b-navbar-nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                    <b-button type="button" variant="success" class="h-25 mr-2" href="/register" size="sm">Register</b-button>
                    <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                    <b-button pill size="sm" class="my-2 my-sm-0" type="submit" variant="transparent"><b-icon icon="search"></b-icon></b-button>
                </b-nav-form>
                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em> <b-avatar variant="info" src="https://placekitten.com/300/300"></b-avatar></em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>
