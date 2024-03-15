<script setup>

</script>

<template>
    <div class="row vh-100 justify-content-center align-items-center">
        <div class="col-12 col-sm-8 col-md-6 col-xl-4">
            <h1 class="text-center">
                Kirish
            </h1>
            <form>
                <div class="mb-3">
                    <label for="email">Email</label>
                    <input type="email" id="email" class="form-control">
                </div>
                <div class="mb-3">
                    <label for="password">Password</label>
                    <input type="password" id="password" class="form-control">
                </div>
                <div class="text-end">
                    <button type="button" class="btn btn-primary" style="min-width: 25%">
                        <span>Kirish</span>
                        <span class="spinner-border spinner-border-sm text-light"></span>
                    </button>
                </div>
            </form>
        </div>
    </div>
</template>

<style scoped>

</style>